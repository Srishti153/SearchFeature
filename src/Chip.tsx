import { MdClose } from 'react-icons/md';

interface ChipProps {
    label: string;
    onDelete: () => void;
  }
  
  const Chip: React.FC<ChipProps> = ({ label, onDelete }) => (
    <div className="flex items-center bg-blue-100 text-blue-800 rounded-full py-1 px-3">
      <span className="mr-2">{label}</span>
      <MdClose onClick={onDelete} className="cursor-pointer" />
    </div>
  );

  export default Chip;