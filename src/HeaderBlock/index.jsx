import "./HeaderBlock.css";

function HeaderBlock({title, descr}) {
  return (
    <div class="cover">
      <div class="wrap">
        <h1 class="header">{title}</h1>
        <p class="descr">
          {descr}
        </p>
      </div>
    </div>
  );
}

export default HeaderBlock;
