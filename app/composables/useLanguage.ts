import { translations, type Language } from "~/data/translations";

export function useLanguage() {
  const language = useCookie<Language>("portfolio-language", {
    default: () => "FR",
    sameSite: "lax",
  });
  const messages = computed(() =>
    translations[language.value === "EN" ? "EN" : "FR"]
  );

  return { language, messages };
}