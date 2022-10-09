function ClassNameConstructor<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  class C extends constructor {
    constructor(...args: any[]) {
      super(...args);

      const class_name_constructor = (this as any)[constructor.name];

      if (!class_name_constructor) return;

      class_name_constructor(...args);

      delete (this as any)[constructor.name];
      (this as any)[constructor.name] = () => {
        throw new Error(
          `❗ This function is being used as the class constructor. It is not callable. (${constructor.name}.${constructor.name})`
        );
      };
    }
  }

  Object.defineProperty(C, 'name', { value: constructor.name });

  return C;
}

export default ClassNameConstructor;
