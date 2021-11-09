import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SingleCategory from './SingleCategory';
import { Skeleton, Row, Col } from 'antd';
import Navbar from '../SideNav/Navbar';

const List = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setCategories(data.categories)
        }
        fetchCategories()
    }, [])
    console.log(categories);
    return (
        <div>
            <Row type="flex" align="middle">
            <Col style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} xs={20} sm={24} md={8} lg={6} xl={6}>
                    <Navbar />
                </Col>
            {categories ? categories.map((category) => (
                
                <Col style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} xs={20} sm={24} md={8} lg={6} xl={6}>
                    
                    <SingleCategory category={category} />
                </Col>
                )) : <Skeleton />}
            </Row>
        </div>
    )
}

export default List
