interface Array<T> {
  last(): T;
  chunk(size: number): T[][];
}

Array.prototype.last = function<T>(): T {
  return this[this.length - 1];
};

Array.prototype.chunk = function<T>(size: number): T[][] {
  const chunks = [];

  for (let i = 0; i < this.length; i += size)
    chunks.push(this.slice(i, i + size));

  return chunks;
};
