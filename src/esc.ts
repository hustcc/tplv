/**
 * Will escape the character repeatedly to prevent it from being consumed
 * @param template
 */
export function cpesc(template:string) {
    return template.replaceAll(/\\/gi, "\\\\");
}