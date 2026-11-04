// Frees the dev server port before `nuxt dev` starts.
//
// Why: if a previous `npm run dev` wasn't stopped cleanly (closed terminal,
// crashed VS Code window, machine sleep), the old Nuxt process can keep
// holding port 3000. Nuxt then silently falls back to 3001+ for the new
// instance, while the browser still has the stale old process answering on
// 3000 — which looks like "a different interface" loads before the real
// project does. This only kills the process if it's a Node process, so it
// never touches an unrelated app that happens to use the same port.

import { execSync } from "node:child_process";

const port = process.argv[2] ?? "3000";

function findPidsWindows(port) {
  const out = execSync(`netstat -ano -p TCP`, { encoding: "utf8" });
  const pids = new Set();
  for (const line of out.split("\n")) {
    const match = line.match(/^\s*TCP\s+\S*:(\d+)\s+\S+\s+LISTENING\s+(\d+)/i);
    if (match && match[1] === String(port)) {
      pids.add(match[2]);
    }
  }
  return [...pids];
}

function findPidsUnix(port) {
  try {
    const out = execSync(`lsof -ti tcp:${port}`, { encoding: "utf8" });
    return out.split("\n").map((l) => l.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function isNodeProcess(pid) {
  try {
    if (process.platform === "win32") {
      const out = execSync(
        `tasklist /FI "PID eq ${pid}" /FO CSV /NH`,
        { encoding: "utf8" }
      );
      return /node\.exe/i.test(out);
    }
    const out = execSync(`ps -p ${pid} -o comm=`, { encoding: "utf8" });
    return /node/i.test(out);
  } catch {
    return false;
  }
}

function kill(pid) {
  try {
    if (process.platform === "win32") {
      execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
    } else {
      process.kill(Number(pid), "SIGKILL");
    }
    console.log(`[free-port] Stopped stale dev server on port ${port} (PID ${pid}).`);
  } catch {
    // Already gone - nothing to do.
  }
}

const pids = process.platform === "win32" ? findPidsWindows(port) : findPidsUnix(port);

for (const pid of pids) {
  if (isNodeProcess(pid)) {
    kill(pid);
  } else {
    console.warn(
      `[free-port] Port ${port} is used by a non-Node process (PID ${pid}) — leaving it alone.`
    );
  }
}
