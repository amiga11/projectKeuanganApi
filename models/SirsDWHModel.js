import { QueryTypes } from "sequelize";
import { databaseSirsDwh, databaseUser } from "../config/Database.js";

export const getKebidananPersalinan = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
  'SELECT ' +
  'sirs_clean.RL_34.koders as id, ' +
  'sirs_clean.RL_34.namars as nama_rs, ' +
  'sirs_clean.RL_34.tahun as tahun, ' +
  'sirs_clean.RL_34.provinsi, ' +
  'sirs_clean.RL_34.kabkota, ' +
  'sirs_clean.RL_34.jenis_kegiatan, ' +
  'sirs_clean.RL_34.rm_total + sirs_clean.RL_34.rnm_total + sirs_clean.RL_34.nr_total as total_kasus '

  const sqlFrom = 'FROM sirs_clean.RL_34 '
  const sqlOrder = " ORDER BY sirs_clean.RL_34.koders ASC ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ? ";

  const sqlWhere = " WHERE sirs_clean.RL_34.tahun = 2022 AND sirs_clean.RL_34.no IN ('3.1','3.2','3.3','3.4','3.5','3.6') AND ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRs = req.query.namaRs || null;
  const provinsi = req.query.provinsi || null;
  const kabkot = req.query.kabkot || null;

  if (kode != null) {
    filter.push("sirs_clean.RL_34.koders = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRs != null) {
    filter.push("sirs_clean.RL_34.namars like ? ");
    sqlFilterValue.push("%".concat(namaRs).concat("%"));
  }

  if (provinsi != null) {
    filter.push("sirs_clean.RL_34.provinsi = ?  ");
    sqlFilterValue.push(provinsi);
  }
  if (kabkot != null) {
    filter.push("sirs_clean.RL_34.kabkota = ?  ");
    sqlFilterValue.push(kabkot);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = " WHERE sirs_clean.RL_34.tahun = 2022 AND sirs_clean.RL_34.no IN ('3.1','3.2','3.3','3.4','3.5','3.6') ";
  } else {
    filter.forEach((value, index) => {
      if (index == 0) {
        sqlFilter = sqlWhere.concat(value);
      } else if (index > 0) {
        sqlFilter = sqlFilter.concat(" and ").concat(value);
      }
    });
  }

  const sql = sqlSelect
    .concat(sqlFrom)
    .concat(sqlFilter)
    .concat(sqlOrder)
    .concat(sqlLimit)
    .concat(sqlOffSet);


  databaseSirsDwh
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(sirs_clean.RL_34.koders) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSirsDwh
        .query(sqlCount, {
          type: QueryTypes.SELECT,
          replacements: sqlFilterValue,
        })
        .then(
          (resCount) => {
            const data = {
              totalRowCount: resCount[0].total_row_count,
              page: page,
              limit: limit,
              data: res,
            };
            callback(null, data);
          },
          (error) => {
            throw error;
          }
        )
        .catch((error) => {
          throw error;
        });
    })
    .catch((error) => {
      callback(error, null);
    });
};
