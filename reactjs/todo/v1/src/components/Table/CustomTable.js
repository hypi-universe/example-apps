import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core
import styles from "../../assets/tableStyle";

const useStyles = makeStyles(styles);

function CustomTable({ columns, data, tableHeaderColor }) {
  const classes = useStyles();
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {columns !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {columns.map((headerItem, index) => (
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  key={index}
                >
                  {headerItem.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className={classes.tableBodyRow}>
              {columns.map((col, trKey) => (
                <TableCell className={classes.tableCell} key={trKey}>
                  {col.render ? col.render(item) : item?.[col?.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  tableHeaderColor: PropTypes.string,
};

CustomTable.defaultProps = {
  tableHeaderColor: "info",
};

export default CustomTable;
