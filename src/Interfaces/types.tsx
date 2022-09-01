export type navType = {
  isNav: boolean;
  setNav: (prevState: boolean) => void;
  theme: string;
  setTheme: (prevState: string) => void;
  toggleTheme: () => void;
};