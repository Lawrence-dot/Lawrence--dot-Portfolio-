export type navType = {
  isNav: boolean;
  setNav: (prevState: boolean) => void;
  theme: string;
  setTheme: (prevState: string) => void;
  toggleTheme: () => void;
};

export interface ProjType {
  title: string,
  stack: string[],
  description: string,
  link: string,
  src: string
}