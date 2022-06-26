import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Checkbox } from '../Checkbox/Checkbox'
import { ToggleComponent } from '../ToggleComponent/ToggleComponent'
import dataJson from '../data.json'
import './TaskMain.scss'

export function TaskMain() {
    const [toggleEsport, setToggleEsport] = useState(false)
    const data = dataJson

    const esportCount = data.data
        .filter(
            (object) =>
                object.level === 1 && object.sportName.includes('Esport')
        )
        .map((object) => object.eventsCount)

    const sumEsport = esportCount.reduce((a, b) => a + b, 0)

    const renderCategoryItemsWithoutEsport = () => {
        return data.data
            .filter(
                (item) => item.level === 1 && !item.sportName.includes('Esport')
            )
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, id) => (
                <ul key={item.categoryId} className="main">
                    <span className="counter">
                        <span>{item.categoryName} </span>
                        <span>( {item.eventsCount} )</span>
                    </span>

                    <ToggleComponent
                        id={id}
                        description={
                            <li key={item.categoryId} className="listOne">
                                {data.data
                                    .filter(
                                        (category) =>
                                            category.parentCategory ===
                                            item.categoryId
                                    )
                                    .sort((a, b) => a.sortOrder - b.sortOrder)
                                    .map((filterCategory) => (
                                        <ul
                                            key={filterCategory.categoryId}
                                            className="levelOne"
                                        >
                                            <span className="counter">
                                                <span>
                                                    {
                                                        filterCategory.categoryName
                                                    }{' '}
                                                </span>
                                                <span>
                                                    ({' '}
                                                    {filterCategory.eventsCount}{' '}
                                                    )
                                                </span>
                                            </span>

                                            <ToggleComponent
                                                id={id}
                                                description={
                                                    <ul className="noListLast">
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
                                                            .map(
                                                                (
                                                                    levelFitler
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            levelFitler.categoryId
                                                                        }
                                                                        className="inputs"
                                                                    >
                                                                        <Checkbox
                                                                            id={
                                                                                undefined
                                                                            }
                                                                        />
                                                                        <li
                                                                            className="noList"
                                                                            key={
                                                                                levelFitler.categoryId
                                                                            }
                                                                        >
                                                                            <span className="counter">
                                                                                <span>
                                                                                    {
                                                                                        levelFitler.categoryName
                                                                                    }{' '}
                                                                                </span>
                                                                                <span>
                                                                                    ({' '}
                                                                                    {
                                                                                        levelFitler.eventsCount
                                                                                    }{' '}
                                                                                    )
                                                                                </span>
                                                                            </span>
                                                                        </li>
                                                                    </div>
                                                                )
                                                            )}
                                                    </ul>
                                                }
                                            />
                                        </ul>
                                    ))}
                            </li>
                        }
                    />
                </ul>
            ))
    }

    const renderCategoryItemsWithEsport = () => {
        return (
            <ul className="main">
                <span className="counter">
                    <span>Esport</span>
                    <span> ( {sumEsport} )</span>
                </span>
                <RiArrowDropDownLine
                    onClick={() => setToggleEsport((prev) => !prev)}
                    className="icons"
                />
                {toggleEsport && (
                    <div>
                        {' '}
                        {data.data
                            .filter(
                                (item) =>
                                    item.level === 1 &&
                                    item.sportName.includes('Esport')
                            )
                            .sort((a, b) => a.sortOrder - b.sortOrder)
                            .map((item, id) => (
                                <li key={item.categoryId} className="listOne">
                                    <span className="counter">
                                        <span>{item.categoryName} </span>
                                        <span>( {item.eventsCount} )</span>
                                    </span>
                                    <ToggleComponent
                                        id={id}
                                        description={
                                            <ul className="noList">
                                                {data.data
                                                    .filter(
                                                        (category) =>
                                                            category.parentCategory ===
                                                            item.categoryId
                                                    )
                                                    .sort(
                                                        (a, b) =>
                                                            a.sortOrder -
                                                            b.sortOrder
                                                    )
                                                    .map((filterCategory) => (
                                                        <li
                                                            key={
                                                                filterCategory.categoryId
                                                            }
                                                            className="listTwo"
                                                        >
                                                            <span className="counter">
                                                                <span>
                                                                    {
                                                                        filterCategory.categoryName
                                                                    }{' '}
                                                                </span>
                                                                <span>
                                                                    ({' '}
                                                                    {
                                                                        filterCategory.eventsCount
                                                                    }{' '}
                                                                    )
                                                                </span>
                                                            </span>
                                                            <ToggleComponent
                                                                id={id}
                                                                description={
                                                                    <ul className="noListLast">
                                                                        {data.data
                                                                            .filter(
                                                                                (
                                                                                    lastLevel
                                                                                ) =>
                                                                                    lastLevel.parentCategory ===
                                                                                    filterCategory.categoryId
                                                                            )
                                                                            .sort(
                                                                                (
                                                                                    a,
                                                                                    b
                                                                                ) =>
                                                                                    a.sortOrder -
                                                                                    b.sortOrder
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    levelFitler
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            levelFitler.categoryId
                                                                                        }
                                                                                        className="inputs"
                                                                                    >
                                                                                        <Checkbox id="" />
                                                                                        <li
                                                                                            className="noList"
                                                                                            key={
                                                                                                levelFitler.categoryId
                                                                                            }
                                                                                        >
                                                                                            <span className="counter">
                                                                                                <span>
                                                                                                    {
                                                                                                        levelFitler.categoryName
                                                                                                    }{' '}
                                                                                                </span>
                                                                                                <span>
                                                                                                    ({' '}
                                                                                                    {
                                                                                                        levelFitler.eventsCount
                                                                                                    }{' '}
                                                                                                    )
                                                                                                </span>
                                                                                            </span>
                                                                                        </li>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                    </ul>
                                                                }
                                                            />
                                                        </li>
                                                    ))}
                                            </ul>
                                        }
                                    />
                                </li>
                            ))}
                    </div>
                )}
            </ul>
        )
    }

    return (
        <ul className="list">
            {renderCategoryItemsWithoutEsport()}
            {renderCategoryItemsWithEsport()}
        </ul>
    )
}
