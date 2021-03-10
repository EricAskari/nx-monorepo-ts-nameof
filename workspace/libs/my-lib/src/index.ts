export * from './lib/my-lib';
interface TEST {
  go: string;
}

console.log("DADA")
console.log(nameof<TEST>());
