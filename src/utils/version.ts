/**
 * Compare two semantic version strings.
 *
 * @returns
 *  1  -> v1 > v2
 *  0  -> v1 === v2
 * -1  -> v1 < v2
 */
export function compareVersions(v1: string, v2: string): number {
  const normalize = (version: string) =>
    version.split('.').map(num => Number.parseInt(num, 10));

  const a = normalize(v1);
  const b = normalize(v2);

  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = a[i] || 0;
    const num2 = b[i] || 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}

export function isVersionLower(current: string, target: string): boolean {
  return compareVersions(current, target) === -1;
}

export function isVersionGreater(current: string, target: string): boolean {
  return compareVersions(current, target) === 1;
}

export function isVersionEqual(current: string, target: string): boolean {
  return compareVersions(current, target) === 0;
}
