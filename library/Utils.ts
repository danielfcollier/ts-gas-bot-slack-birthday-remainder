const toProperCase = (text: string) => {
  return text.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase());
};

export default class Utils {
  static buildObject(schema, array) {
    const reducer = (previous, current, index) => {
      current = { [schema[index]]: array[index] };

      return { ...previous, ...current };
    };

    const object = schema.reduce(reducer, {});

    return object;
  }

  static getFirstName(name: string) {
    const firstName = name.trim().split(' ')[0];
    return toProperCase(firstName);
  }
}
