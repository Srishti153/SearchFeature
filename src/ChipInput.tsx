import React, { useState } from 'react';
import Chip from './Chip'
import { MdClose } from 'react-icons/md';
import { forEachChild } from 'typescript';

interface ChipInputProps {
    initialChips: string[];
    items: string[];
}



const ChipInput: React.FC<{ items: string[]; initialChips?: string[] }> = ({ items, initialChips, }) => {
    
    const [chips, setChips] = useState<string[]>(initialChips || []);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<string[]>(items);
    //const [searchList, setSearchList] = useState<string[]>(items);


    const handleChipDelete = (index: number) => {
        const newChips = [...chips];

        var removedChip = newChips.splice(index, 1);
        setChips(newChips);
        setFilteredItems([...filteredItems, removedChip[0] as string]);
    };

    const handleItemClick = (item: string) => {
        if (item != '') {
            setChips([...chips, item]);
            setFilteredItems(filteredItems.filter((i) => i !== item));
        }

        //setInputValue('');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        
        setFilteredItems(
            items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const copychips = [...chips]
         if (!inputValue && event.key === 'Backspace') {
            const newChips = [...chips];
            newChips.pop();
            setChips(newChips);
            setFilteredItems([...filteredItems, chips.pop() as string]);
        }

    };


    const inputRef = React.useRef<HTMLInputElement>(null);


    return (
        <div className="w-full relative">
            {/* render the chips */}
            <div className="flex flex-wrap gap-2 mb-2">

                {chips.map((chip, index) => (
                    <Chip key={index} label={chip} onDelete={() => handleChipDelete(index)} />
                ))}
            </div>

            {/* render the input field and dropdown list */}
            <div className="relative justify-center">
                <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                <ul className="absolute w-full bg-white border rounded-md shadow-lg z-10">
                    <div className='py-20'></div>
                    {
                        
                    }
                    {filteredItems.sort().map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 w-15 h-full rounded-md relative p-8 border-2 "
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChipInput;