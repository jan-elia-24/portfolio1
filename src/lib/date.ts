export function formatLocalDate(iso: string, locale = "en-SE") {
  try {
    return new Date(iso).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Europe/Stockholm",
    });
  } catch {
    return iso;
  }
}
