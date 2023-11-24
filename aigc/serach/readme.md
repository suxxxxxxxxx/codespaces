#搜索

-项目亮点
    搜索比较难，可以在面试的时候讲出来
-全栈
    -前端  防抖和节流  
    -后端
        -SQL posts LIKE `%${keyword}`
        -各种数据放入hadop flink
        -Elastic Search node
    -AIGC

-数据?
    -python 爬虫
    -AIGC 生成数据
        get_response
        prompt 电商网站 手机 50条
- pandas 来处理aigc生成的text文本
    -split('\n')换按行符切割
    -pandas提供了DataFrame实例
        pd.DataFrame()
        pd.DataFrame({"product_name"}) column_name
    -pd.head()
        默认给5条

-文本 如何转成向量 数学表达 openai提供embedding 接口
 cosin值
-openai Completion\chat
 -embedding
    openai的新接口
    查询 keyword + 数据都进行向量计算
    cosine_smilarity 两个向量间的相似度 -》 0 相同，或相似的
    相反的话 负值
