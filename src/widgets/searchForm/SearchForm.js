import React, { useState } from 'react';
import { TextInput } from 'flowbite-react';
import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';
import "./SearchForm.css";
import { DataState } from '../../context/DataContext';

const SearchForm = () => {
    const { searchText, setSearchText } = DataState();

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        setSearchText(text);
    }

    const handleClear = () => {
        setText('');
        setSearchText('');

    }

    return (
        <div className='search_form relative' >

            <input
                id="textId "
                type="text"
                value={text}
                className='w-full border rounded-lg pl-12 search_input '
                required={true}
                onChange={handleChange}


            />
            <span className="absolute top-3 left-4  text-dark text-xl ">
                <IoSearchOutline />
            </span>
            <button
                className="absolute close_btn right-4 top-3 text-darkGray text-xl pointer"
                onClick={handleClear}
            >
                <IoCloseCircle

                />
            </button>
        </div>
    )
}

export default SearchForm
