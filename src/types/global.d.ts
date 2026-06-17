export {}

declare global {
  interface Window {
    /** Yandex.Metrika global, present after the counter script loads. */
    ym?: (counterId: number, action: string, ...params: unknown[]) => void
  }
}
