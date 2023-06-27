<template><div><div class="topnav">
    <div class="logo"></div> 
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
    </div></div>
    <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
            <a>GitHub</a>
            <a>开始</a>
        </p>
    </div>
</template>
<style lang="scss" scoped>
.topnav{
    background-color: rgba(98, 38, 150, 0.741);
    display:flex;
    padding:16px;
    > .logo{ 
        max-width:6em;
        margin-right:auto;
    }
    > .menu{display:flex;
    white-space:nowrap;
flex-wrap:nowrap;
> li{
    margin:0 1em;
}}
}
</style>