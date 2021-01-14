import PencilSVG from '../assets/pencil.svg';
import ColorFillSVG from '../assets/fill-color.svg';

type ToolItem = {
  name: string;
  imgSrc: string;
};
export type ToolItems = ToolItem[];
const toolsArr: ToolItems = [
  { name: 'Pencil', imgSrc: PencilSVG },
  { name: 'Fill', imgSrc: ColorFillSVG },
];

export default toolsArr;
