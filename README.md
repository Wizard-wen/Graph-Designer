# Metagraph

> 让不同知识背景的人站在同一起跑线

__[点击体验](http://edu.songxiwen.com.cn)__

# Introduce
Metagraph是一款知识创作分享工具，不同于以往的知识创作平台，Metagraph提供了强大的内容关联能力。
你可以在Metagraph中构建自己的仓库(Repository)，创作你的内容。
当你遇到一些想要着重表述的词条，你可以创建或绑定一个知识点。
在创建知识点时，如果遇到一些较为复杂的知识点，可能需要更多的词条来解释当前知识点。
此时，可以在知识点编辑界面中继续引用额外的知识点，我们还会同时为您在图中创建一个从额外知识点到当前知识点的关联。
Graph Designer的核心思想是帮助您在创作内容的同时思考和整理内容之间的关联。
这样做的好处是可以让您对内容更加理解，增强内容的准确性。
同时，可以让 初次接触这个领域的伙伴也能更快的入门。

# Modules
- [ ] 首页
    - [X] 我的仓库列表
    - [ ] followers动态
    - [ ] 推荐仓库
- [X] 登录页
- [X] 注册页
- [ ] 知识地图页
   - [ ] 知识点模糊搜索
   - [ ] 知识点路径搜索  
- [X] 创建仓库页
- [ ] 仓库列表页
- [ ] 仓库编辑页  
- [ ] 仓库开发页
    - [ ] 知识图谱编辑面板
       - [X] 展示知识点的前置、导出知识点
       - [X] 拖拽仓库外前置、导出知识点到面板中 
       - [X] 为知识点创建关联
       - [X] 区分展示&编辑模式
       - [X] 小地图
       - [X] 通过Websocket记录元素在图中位置变化
       - [X] 图的放大缩小
       - [X] 元素宽高编辑面板
    - [ ] 知识单元树(Section)
       - [X] 绑定知识点
       - [X] 创建单元
       - [X] 修改单元名
       - [ ] 更改单元子树父级
    - [ ] 知识单元文本编辑
       - [X] 通过@字符引用(Mention)仓库已绑定知识点
       - [ ] 选中文本并创建新知识点
       - [X] 基础富文本编辑功能
       - [X] 上传word，解析，并生成高频词
       - [ ] 富文本添加图片
    - [ ] 备选知识点列表
    - [X] 仓库内容评论
    - [ ] 仓库绑定实体列表
        - [X] 创建知识点
        - [X] 绑定知识点
        - [X] 全平台搜索知识点，load more分页
        - [X] 展示知识点抽屉页
    - [ ] 仓库幻灯片(next)
    - [ ] 仓库roadmap(next)
- [X] 知识点编辑页面
  - [X] 知识点编辑器
  - [X] 知识点基础信息表单
  - [X] 知识点评论
- [ ] 我的
    - [ ] 我的信息修改
    - [ ] 我的主页
    - [ ] 我赞过的
    - [ ] 我的仓库
    - [ ] 我的tag
    - [ ] 我的followers
    - [ ] 我的pr
    - [ ] 我的消息列表

# Quick Start

## 创建仓库

## 创建单元


# Changelog

## [0.0.1] - 2021-09-12
### Added
- 首次上线
- 实现用户注册、登录体系
- 实现仓库的创建、编辑体系

## [0.0.2] - 2021-09-18
### Added
- 图编辑时记录下位置信息，存储在RepositoryEntity表中


# Roadmap
## Feature
- 知识地图页面，支持知识路径搜索，基于Neo4j图数据库
- 知识地图页面，支持输入Cypher语句，回显搜索结果
- 仓库开发页面，三级前置知识点展示
- 用户提交PR
- 用户积分体系，创建仓库、知识点有基础积分；获得点赞，按照点赞数超额递进积分
- 知识点点赞
- 用户信息编辑
- 用户上传word，提取文章内容，提取文章关键字
- 用户上传word，直接生成一个仓库、图谱
- 重新开发首页，增加产品展示、动画等
- 开发图片上传时裁剪
- 知识点面板开发

## Performance

- 优化仓库开发页面的布局结构
- 优化编辑模式下的富文本
- 编辑模式下，富文本添加图片可以编辑图片大小  
- 优化预览模式下的富文本
- 优化预览模式下的图谱

## Fixed
