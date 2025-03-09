/**
 * Espera un tiempo determinado en milisegundos.
 * @param ms - Tiempo en milisegundos a esperar
 * @returns Una promesa que se resuelve después del tiempo especificado
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
