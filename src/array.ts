export function randomInArray<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;

  return arr[Math.floor(Math.random() * arr.length)];
}

export function chunkArray<T>(arr: T[], count: number): T[][] {
  const chunks: T[][] = [];
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (i % count === 0) {
      index++;
    }

    if (!chunks[index]) {
      chunks[index] = [];
    }

    chunks[index].push(arr[i]);
  }

  return chunks;
}
