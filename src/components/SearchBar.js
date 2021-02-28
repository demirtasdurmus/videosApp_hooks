import React, { useState } from 'react';

const SearchBar = ({onSearchSubmit}) => {
    const [ term, setTerm ] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);

        setTerm("");
    }


        return (
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label className="form-label">Video Search</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setTerm(e.target.value)}
                            value={term}
                        />
                    </div>
                </form>
            </div>
        )

};

export default SearchBar;