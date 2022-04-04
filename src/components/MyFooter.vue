<template>
  <div class="my-footer">
    <footer>
      <ul>
        <li>
          <a href="https://t.me/no1621name">telegram</a>
        </li>
        <li>
          <a href="https://github.com/no1621name">github</a>
        </li>
        <li>
          <a href="https://vk.com/no1621name">vk</a>
        </li>
        <li>
          <a href="#">no1621name@gmail.com</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
};
</script>

<style lang="scss" scoped>
.my-footer{
  footer{
    background: #CACACA;
    text-align: center;
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        li+li{
            margin-left: 10px;
        }
        li{
            display: inline-block;
            a{
                color: #777;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
  }
}
</style>
