import React, { useState } from "react";

// Types
import { Category, Difficulty } from "../../Utils";

//  Styles
import { SettingsStyles } from "./Settings.styles";
import { ButtonGroup, Button } from "react-bootstrap";

type Props = {
    setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    category: Category;
};

const Settings: React.FC<Props> = ({
    setDifficulty,
    setCategory,
    category,
}) => {
    const [easyActive, setEasyActive] = useState(true);
    const [mediumActive, setMediumActive] = useState(false);
    const [hardActive, setHardActive] = useState(false);

    const handleDifficultySelection = ({
        currentTarget,
    }: React.MouseEvent<HTMLButtonElement>) => {
        switch (currentTarget.innerHTML) {
            case "Easy":
                setDifficulty(Difficulty.EASY);
                setEasyActive(true);
                setMediumActive(false);
                setHardActive(false);
                break;
            case "Medium":
                setDifficulty(Difficulty.MEDIUM);
                setEasyActive(false);
                setMediumActive(true);
                setHardActive(false);
                break;
            case "Hard":
                setDifficulty(Difficulty.HARD);
                setEasyActive(false);
                setMediumActive(false);
                setHardActive(true);
                break;
            default:
                setDifficulty(Difficulty.EASY);
                setEasyActive(true);
                setMediumActive(false);
                setHardActive(false);
                break;
        }
    };

    const handleCategorySelection = ({
        target,
    }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = target;
        for (const category in Category) {
            if (Category[category as keyof typeof Category] === value) {
                setCategory(Category[category as keyof typeof Category]);
            }
        }
    };

    return (
        <SettingsStyles>
            <ButtonGroup>
                <label>Select difficulty:</label>
                <Button
                    onClick={handleDifficultySelection}
                    variant={"light"}
                    active={easyActive}
                >
                    Easy
                </Button>
                <Button
                    onClick={handleDifficultySelection}
                    variant={"light"}
                    active={mediumActive}
                >
                    Medium
                </Button>
                <Button
                    onClick={handleDifficultySelection}
                    variant={"light"}
                    active={hardActive}
                >
                    Hard
                </Button>
            </ButtonGroup>
            <div>
                <label htmlFor="category">Choose a topic:</label>
                <select
                    id="category"
                    value={category}
                    onChange={handleCategorySelection}
                >
                    <option value={Category.GENERAL_KNOWLEDGE}>
                        General Knowledge
                    </option>
                    <option value={Category.BOOKS}>Books</option>
                    <option value={Category.FILM}>Film</option>
                    <option value={Category.MUSIC}>Music</option>
                    <option value={Category.MUSICALS_AND_THEATRES}>
                        Musicals and Theatres
                    </option>
                    <option value={Category.TELEVISION}>Television</option>
                    <option value={Category.VIDEO_GAMES}>Video Games</option>
                    <option value={Category.BOARD_GAMES}>Board Games</option>
                    <option value={Category.SCIENCE_AND_NATURE}>
                        Science and Nature
                    </option>
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
                    <option value={Category.VEHICLES}>Vehicles</option>
                    <option value={Category.COMICS}>Comics</option>
                    <option value={Category.GADGETS}>Gadgets</option>
                    <option value={Category.ANIME_AND_MANGA}>
                        Anime and Manga
                    </option>
                    <option value={Category.CARTOON_AND_ANIMATIONS}>
                        Cartoon and Animations
                    </option>
                </select>
            </div>
        </SettingsStyles>
    );
};

export default Settings;
