function ClassNameConstructor<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  class C extends constructor {
    constructor(...args: any[]) {
      super(...args);

      const class_name_constructor = (this as any)[constructor.name];

      if (class_name_constructor) class_name_constructor(...args);
    }
  }

  Object.defineProperty(C, 'name', { value: constructor.name });

  return C;
}

export default ClassNameConstructor;
