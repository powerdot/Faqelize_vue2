<template>
  <div class="page">
    JSON dictionary is an array with questions and answers.
    <br />
    Here is example:
    <br />
    <div class="example">
      <div class="filename">public/dictionary.json</div>
      <code>
        [
        <br />
        { id: "one", "question": "What is your name?", "answer": "My name is
        {{ name }}" },
        <br />
        { id: "two", "question": "What is your age?", "answer": "I am
        {{ age }} years old" }
        <br />
        ]
      </code>
    </div>
    Also you can use html for answers:
    <br />
    <div class="example">
      <div class="filename">public/dictionary.json</div>
      <code>
        ...
        <br />
        { <br />
        "id": "three", <br />
        "question": "What is your name?", <br />
        "answer": {<br />
        "type": "html", <br />
        "html": "Here is my inline html answer!" <br />
        } <br />
        }
        <br />
        ...
      </code>
    </div>
    <br />
    And also you can open modal pages like that:
    <br />
    <div class="example">
      <div class="filename">public/dictionary.json</div>
      <code>
        ...
        <br />
        { <br />
        "id": "four", <br />
        "question": "What is your name?", <br />
        "answer": {<br />
        "type": "page", <br />
        "page": "ExampleAnswerPage", <br />
        "subText": "Here is short question description to define page content
        before opening." <br />
        } <br />
        }
        <br />
        ...
      </code>
    </div>
    You can store dictionary as a file in public folder or on any other URL path
    (for example, on dedicated S3 storage).
    <br />
    Set dictionary URL in <b>faqelize.config.js</b> file (<b>database</b>
    option).
    <br />
    <br />
    Set <b>encryptDatabase</b> option to true to encrypt dictionary while
    building (<b>npm run build</b>). CLI will ask for password to encrypt.
  </div>
</template>


<style lang="scss" scoped>
.page {
  margin-top: 10px;
  margin-bottom: 10px;
}
.example {
  padding-left: 10px;
  border-left: 2px solid #eee;
  margin-top: 5px;
  margin-bottom: 5px;
  &:hover {
    border-color: #7967e1;
  }
  .filename {
    font-size: 12px;
    color: #999;
  }
  code {
    font-size: 14px;
    color: #333;
  }
}
</style>