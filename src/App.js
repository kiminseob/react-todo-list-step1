function App() {
  return (
    <div class="todoapp">
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        autofocus
      />
      <main>
        <input class="toggle-all" type="checkbox" />
        <ul id="todo-list" class="todo-list">
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label class="label">새로운 타이틀</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="새로운 타이틀" />
          </li>
          <li class="editing">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label class="label">완료된 타이틀</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="완료된 타이틀" />
          </li>
          <li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox" checked />
              <label class="label">완료된 타이틀</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="완료된 타이틀" />
          </li>
        </ul>
        <div class="count-container">
          <span class="todo-count">
            총 <strong>0</strong> 개
          </span>
          <ul class="filters">
            <li>
              <a class="all selected" href="##">
                전체보기
              </a>
            </li>
            <li>
              <a class="active" href="#active">
                해야할 일
              </a>
            </li>
            <li>
              <a class="completed" href="#completed">
                완료한 일
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
