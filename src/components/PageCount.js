import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PageCount = (props) => {
  return (
    <div>
      <div class="product__pagination">
        <a href="#" class="current-page">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">
          <i class="fa fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
};
export default PageCount;
