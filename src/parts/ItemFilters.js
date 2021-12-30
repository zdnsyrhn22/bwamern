import React from "react";
import Searchbar from "elements/Searchbar";
import Dropdown from "elements/Dropdown";

export default function ItemFilter(props) {
  const { data, dropdown } = props;

  return (
    <section className="container" style={{ marginBottom: 20 }}>
      <div className="row">
        <div className="col-md-3">
          <Searchbar
            id="searchParams"
            name="searchParams"
            value={data.searchParams}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6"></div>
        <div className="col">
          <Dropdown
            id="sequenceParams"
            name="sequenceParams"
            value={data.sequenceParams}
            onChange={props.onChange}
            listOption={dropdown}
          />
        </div>
      </div>
    </section>
  );
}
