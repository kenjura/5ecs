// @flow

import moize from 'moize';
import { get } from '../helper/fetchHelper';

export interface ICharacterClass {
  name: string;
  path: string;
}

export default class CharacterClass {
  name: string;
  path: string;
  static findAll: () => Array<CharacterClass>;
  static findOneByName: (string) => ?CharacterClass;

  constructor(props: ICharacterClass) {
    this.name = props.name;
    this.path = props.path;
  }

  getContents = moize(getContents, { isPromise: true });
}

CharacterClass.findAll = moize(findAll);
CharacterClass.findOneByName = moize(findOneByName);

function findAll(): Array<CharacterClass> {
  return [
    new CharacterClass({
      name: 'Elementalist',
      path: 'Classes/Elementalist.md',
    }),
    new CharacterClass({
      name: 'Invoker',
      path: 'Classes/Invoker.md',
    }),
    new CharacterClass({ name: 'Psion', path: 'Classes/Psion.md' }),
    new CharacterClass({ name: 'Witch', path: 'Classes/Witch.md' }),
  ];
}

function findOneByName(className: string): CharacterClass | null {
  const allClasses: Array<CharacterClass> = findAll();
  const whichClass: ?CharacterClass = allClasses.find(
    (cls) => cls.name === className,
  );
  if (!(whichClass instanceof CharacterClass)) return null;
  return whichClass;
}

async function getContents(): Promise<string> {
  const url = `https://raw.githubusercontent.com/kenjura/5ecs-docs/main/docs/${this.path}`;
  const response = await fetch(url);
  const text = await response.text();
  return text;
}
