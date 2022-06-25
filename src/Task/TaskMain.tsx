import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import dataJson from '../data.json'
import './TaskMain.scss'

export function TaskMain() {
    const [open, setIsOpen] = useState(false)
    const data = dataJson

    const toggleListHandler = () => {
        return setIsOpen(!open)
    }

    const renderCategoryItems = () => {
        return data.data
            .filter(
                (item) => item.level === 1 && !item.sportName.includes('Esport')
            )
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item) => (
                <li className="levelsLists" key={item.categoryId}>
                    {item.categoryName}
                    <RiArrowDropDownLine
                        className="icons"
                        onClick={toggleListHandler}
                    />

                    {open ? (
                        <ul>
                            {data.data
                                .filter(
                                    (category) =>
                                        category.parentCategory ===
                                        item.categoryId
                                )
                                .sort((a, b) => a.sortOrder - b.sortOrder)
                                .map((filterCategory) => (
                                    <li key={filterCategory.categoryId}>
                                        {filterCategory.categoryName}
                                        <ul>
                                            {data.data
                                                .filter(
                                                    (lastLevel) =>
                                                        lastLevel.parentCategory ===
                                                        filterCategory.categoryId
                                                )
                                                .sort(
                                                    (a, b) =>
                                                        a.sortOrder -
                                                        b.sortOrder
                                                )
                                                .map((levelFitler) => (
                                                    <li
                                                        key={
                                                            levelFitler.categoryId
                                                        }
                                                    >
                                                        {
                                                            levelFitler.categoryName
                                                        }
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        ''
                    )}
                </li>
            ))
    }

    const renderCategoryItemsWithEsport = () => {
        return data.data
            .filter(
                (item) => item.level === 1 && item.sportName.includes('Esport')
            )
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item) => (
                <li key={item.categoryId}>
                    {item.categoryName}

                    <ul>
                        {data.data
                            .filter(
                                (category) =>
                                    category.parentCategory === item.categoryId
                            )
                            .sort((a, b) => a.sortOrder - b.sortOrder)
                            .map((filterCategory) => (
                                <li key={filterCategory.categoryId}>
                                    {filterCategory.categoryName}
                                    <ul>
                                        {data.data
                                            .filter(
                                                (lastLevel) =>
                                                    lastLevel.parentCategory ===
                                                    filterCategory.categoryId
                                            )
                                            .sort(
                                                (a, b) =>
                                                    a.sortOrder - b.sortOrder
                                            )
                                            .map((levelFitler) => (
                                                <li
                                                    key={levelFitler.categoryId}
                                                >
                                                    {levelFitler.categoryName}
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                    </ul>
                </li>
            ))
    }

    return (
        <ul className="list">
            {renderCategoryItems()}
            <li>
                Esport
                <ul>{renderCategoryItemsWithEsport()}</ul>
            </li>
        </ul>
    )
}
