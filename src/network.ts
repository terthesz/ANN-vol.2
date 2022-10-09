import Layer from './layer';

class Network {
  layers: Array<Layer>;

  constructor(structure: Array<number>) {
    if (!structure || !structure.length)
      throw new Error('❗ network structure not defined. (Network.Network)');

    this.layers = structure.map((nodes: number) => new Layer(nodes));
  }
}

export default Network;
