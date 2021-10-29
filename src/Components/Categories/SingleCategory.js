import React from 'react'
import { Card, Skeleton } from 'antd';
const { Meta } = Card;

const SingleCategory = ({category}) => {
    
    return (
        <Card
    hoverable
    style={{ width: 240, margin: 5, backgroundColor: "#d3ffbb" }}
    cover={<img alt={category.strCategory} src={category.strCategoryThumb} />}
  >
    <Meta title={category.strCategory} description={category.strCategoryDescription.substring(0, 100) + '..'} />
  </Card>
    )
}

export default SingleCategory
