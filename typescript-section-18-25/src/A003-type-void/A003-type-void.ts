function noReturn(...args: string[]): void {
  console.log(args.join(''));
}

const person2 = {
  name: 'Klésio',
  lastName: 'Pereira',

  showName(): void {
    console.log(this.name, this.lastName);
  },
};

noReturn('Klesio', ' Ferdandes');
person2.showName();
