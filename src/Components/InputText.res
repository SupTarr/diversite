@react.component
let make =
    (
      ~className: option<string>=?,
      ~type_: option<string>=?,
      ~placeholder: option<string>=?,
      ~inputLabel: option<string>=?,
      ~isTextarea=false,
      ~name="",
    ) => {
  <div
    className={
      "inputtext "
      ++ {
        Js.Option.getWithDefault("", className);
      }
      ++ {
        isTextarea ? " inputtext-textarea" : "";
      }
    }>
    <p className="inputtext_label">
      {React.string(Js.Option.getWithDefault("", inputLabel))}
    </p>
    {isTextarea
       ? <textarea className="input-default" name=name defaultValue=Js.Option.getWithDefault("", placeholder) />
       : <input
           className="input-default"
           name=name
           type_={Js.Option.getWithDefault("text", type_)}
           placeholder={Js.Option.getWithDefault("", placeholder)}
         />}
  </div>;
};
