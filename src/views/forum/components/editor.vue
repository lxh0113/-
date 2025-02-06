<template>
  <div class="myEditorBox">
    <Toolbar
      class="myToolbar"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      class="myEditor"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default {
  name: "myEditor",
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("<p>hello</p>");

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
      }, 1500);
    });

    const toolbarConfig = {};
    const editorConfig = { placeholder: "请输入内容..." };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    return {
      editorRef,
      valueHtml,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
};
</script>

<style lang="scss" scoped>
.myEditorBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .myToolbar {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }

  .myEditor {
    flex:1;
    min-height: 500px;
    max-height: calc(100vh - 240px);
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 20px;
    border: 1px solid $primary-border-color;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    overflow-y: scroll;
  }
}
</style>
