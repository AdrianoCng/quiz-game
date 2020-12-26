import React, {useState} from 'react';

// Types
import { Category, Difficulty } from '../Utils';

type Props = {
    setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    category: Category;
}


const Settings: React.FC<Props> = ({setDifficulty, setCategory, category}) => {

    const [easyActive, setEasyActive] = useState<"active" | null>("active");
    const [mediumActive, setMediumActive] = useState<"active" | null>(null);
    const [hardActive, setHardActive] = useState<"active" | null>(null);

    const handleDifficultySelection = ({currentTarget}: React.MouseEvent<HTMLButtonElement>) => {
        switch (currentTarget.innerHTML) {
            case "Easy":
                setDifficulty(Difficulty.EASY);
                setEasyActive("active");
                setMediumActive(null);
                setHardActive(null);
                break;
            case "Medium":
                setDifficulty(Difficulty.MEDIUM);
                setEasyActive(null);
                setMediumActive("active");
                setHardActive(null);
                break;
            case "Hard":
                setDifficulty(Difficulty.HARD);
                setEasyActive(null);
                setMediumActive(null);
                setHardActive("active");
                break;
            default:
                setDifficulty(Difficulty.EASY);
                setEasyActive("active");
                setMediumActive(null);
                setHardActive(null);
                break;
        };
    };

    const handleCategorySelection = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
        const value = target.value;
        for (const category in Category) {
            if (Category[category as keyof typeof Category] === value) {
                setCategory(Category[category as keyof typeof Category]);
            }
        };
    }
    
    return (
        <div>
            <div className="btn-group d-block">
                <label className="mr-2">Select difficulty:</label>
                <button type="button" className={`btn btn-sm btn-light ${easyActive}`} onClick={handleDifficultySelection}>Easy</button>
                <button type="button" className={`btn btn-sm btn-light ${mediumActive}`} onClick={handleDifficultySelection}>Medium</button>
                <button type="button" className={`btn btn-sm btn-light ${hardActive}`} onClick={handleDifficultySelection}>Hard</button>
            </div>
            <div>
                <label className="mr-2" htmlFor="category">Choose a topic:</label>
                <select id="category" value={category} onChange={handleCategorySelection}>
                    <option value={Category.GENERAL_KNOWLEDGE}>General Knowledge</option>
                    <option value={Category.BOOKS}>Books</option>
                    <option value={Category.FILM}>Film</option>
                    <option value={Category.MUSIC}>Music</option>
                    <option value={Category.MUSICALS_AND_THEATRES}>Musicals and Theatres</option>
                    <option value={Category.TELEVISION}>Television</option>
                    <option value={Category.VIDEO_GAMES}>Video Games</option>
                    <option value={Category.BOARD_GAMES}>Board Games</option>
                    <option value={Category.SCIENCE_AND_NATURE}>Sciende and Nature</option>
                    <option value={Category.COMPUTERS}>Computers</option>
                    <option value={Category.MATHEMATICS}>Mathematics</option>
                    <option value={Category.MYTHOLOGY}>Mythology</option>
                    <option value={Category.SPORTS}>Sports</option>
                    <option value={Category.GEOGRAPHY}>Geography</option>
                    <option value={Category.HISTORY}>History</option>
                    <option value={Category.POLITICS}>Politics</option>
                    <option value={Category.ART}>Art</option>
                    <option value={Category.CELEBRITIES}>Celebrities</option>
                    <option value={Category.ANIMALS}>Animals</option>
                </select>
            </div>
        </div>
        
    )
};

export default Settings;