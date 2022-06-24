import { useState, useEffect } from 'react'
import dataJson from '../data.json'
import './TaskMain.scss'

export function TaskMain() {
    const [data, setData] = useState(dataJson)

    const dataFilterWithoutEsport = data.data.filter(
        (item) => item.level === 1 && !item.sportName.includes('Esport')
    )

    const dataFilterWithEsport = data.data.filter(
        (item) => item.level === 1 && item.sportName.includes('Esport')
    )

    return (
        <ul className="list">
            {dataFilterWithoutEsport
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((item) => (
                    <li key={item.categoryId}>
                        {item.categoryName}
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
                    </li>
                ))}
            <li>
                Esport
                <ul>
                    {dataFilterWithEsport
                        .sort((a, b) => a.sortOrder - b.sortOrder)
                        .map((item) => (
                            <li key={item.categoryId}>
                                {item.categoryName}
                                <ul>
                                    {data.data
                                        .filter(
                                            (category) =>
                                                category.parentCategory ===
                                                item.categoryId
                                        )
                                        .sort(
                                            (a, b) => a.sortOrder - b.sortOrder
                                        )
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
                            </li>
                        ))}
                </ul>
            </li>
        </ul>
    )
}
