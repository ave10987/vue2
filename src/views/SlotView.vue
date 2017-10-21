<template>
  <div>
    <slot-cmp>
      <h1 slot="header">Header slot 입니다.</h1>
      <p>메인 컨텐츠의 단락입니다.</p>
      <p>하나 더 있습니다.1</p>
      <p>하나 더 있습니다.2</p>
      <p>하나 더 있습니다.3</p>      
      <p slot="footer">Footer slot 입니다.</p>
    </slot-cmp>
    <br /><br /><br />
    <slot-cmp>
      <h1 slot="header">위와 같은 컴포넌트 입니다.</h1>
      <p slot="footer">Footer slot 입니다.</p>
      <p slot="footer">slot에 해당하는 컨텐츠가 없는 경우 slot은 무시됩니다.</p>
      <p slot="footer">같은 이름의 slot이 여러개 존재 하여도 모두 나타납니다.</p>
    </slot-cmp>
  </div>
</template>
<script>
import SlotCmp from '../components/SlotCmp'
export default {
  name: 'SlotView',
  components: {
    SlotCmp
  }
}
</script>

