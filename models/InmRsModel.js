import { QueryTypes } from "sequelize";
import { datab, databaseSimaraseSimar } from "../config/Database.js";

// export const get = (req, callback) => {
//     const page = parseInt(req.query.page) || 1
//     const limit = parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100

//     const startIndex = (page - 1) * limit
//     const endIndex = limit

//     const sqlSelect = 'SELECT ' +
//     'simar.data_rs_new.propinsi AS kode, ' +
//     'simar.data_rs_new.RUMAH_SAKIT AS namaRS, ' +
//     'simar.kkt.bulan AS bulan, ' +
//     'simar.kkt.tahun AS tahun, ' +
//     'simar.kkt.capaian AS kepatuhanKebersihanTangan, ' +
//     'simar.kpapd.capaian AS kepatuhanPenggunaanAPD, ' +
//     'simar.kwv.capaian AS kepatuhanWaktuVisiteDokter, ' +
//     'simar.kpfn_kpf.capaian AS kepatuhanPenggunaanFormulariumNasional, ' +
//     'simar.kwt.capaian AS kecepatanWaktuTanggapKomplain '

//         const sqlFrom = 'FROM simar.data_rs_new ' +
//         'LEFT JOIN simar.kkt ON simar.kkt.kode_rs = simar.data_rs_new.propinsi ' +
//         'LEFT JOIN simar.kpapd ON simar.kpapd.kode_rs = simar.data_rs_new.propinsi ' +
//         'LEFT JOIN simar.kwv ON simar.kwv.kode_rs = simar.data_rs_new.propinsi ' +
//         'LEFT JOIN simar.kpfn_kpf ON simar.kpfn_kpf.kode_rs = simar.data_rs_new.propinsi ' +
//         'LEFT JOIN simar.kwt ON simar.kwt.kode_rs = simar.data_rs_new.propinsi '

//         const sqlOrder = ' ORDER BY simar.data_rs_new.propinsi '

//     const sqlLimit = 'LIMIT ? '

//     const sqlOffSet = 'OFFSET ?'

//     const sqlWhere = 'WHERE  '

//     const filter = []
//     const sqlFilterValue = []

//     const kode = req.query.kode || null
//     const namaRS = req.query.namaRS || null
//     const bulan = req.query.bulan || null
//     const tahun = req.query.tahun || null

//     if (kode != null) {
//         filter.push("simar.data_rs_new.propinsi = ? ")
//         sqlFilterValue.push(kode)
//     }

//     if (namaRS != null) {
//         filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ")
//         sqlFilterValue.push('%'.concat(namaRS).concat('%'))
//     }

//     if (bulan != null) {
//         filter.push("simar.kkt.bulan = ? and simar.kpapd.bulan = ? and simar.kwv.bulan = ? and simar.kpfn_kpf.bulan = ? and simar.kwt.bulan = ? ")
//         sqlFilterValue.push(bulan)
//         sqlFilterValue.push(bulan)
//         sqlFilterValue.push(bulan)
//         sqlFilterValue.push(bulan)
//         sqlFilterValue.push(bulan)
//     }

//     if (tahun != null) {
//         filter.push("simar.kkt.tahun = ? and simar.kpapd.tahun = ? and simar.kwv.tahun = ? and simar.kpfn_kpf.tahun = ? and simar.kwt.tahun = ? ")
//         sqlFilterValue.push(tahun)
//         sqlFilterValue.push(tahun)
//         sqlFilterValue.push(tahun)
//         sqlFilterValue.push(tahun)
//         sqlFilterValue.push(tahun)
//     }

//     sqlFilterValue.push(endIndex)
//     sqlFilterValue.push(startIndex)

//     let sqlFilter = ''
//     if (filter.length == 0) {
//         sqlFilter = 'WHERE simar.data_rs_new.Propinsi IS NOT NULL '
//     } else {
//         filter.forEach((value, index) => {
//             if (index == 0) {
//                 sqlFilter = sqlWhere.concat(value)
//             } else if (index > 0) {
//                 sqlFilter = sqlFilter.concat(' and ').concat(value)
//             }
//         })
//     }

//     const sql = sqlSelect.concat(sqlFrom).concat(sqlFilter).concat(sqlOrder).concat(sqlLimit).concat(sqlOffSet)

//     // console.log("haloo ")
//     // console.log(sqlFilterValue)

//     databaseSimar.query(sql, {
//         type: QueryTypes.SELECT,
//         replacements: sqlFilterValue
//     }).then((res) => {
//         const sqlSelectCount = 'SELECT count(simar.data_rs_new.Propinsi) as total_row_count '
//         const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter)
//         databaseSimar.query(sqlCount, {
//             type: QueryTypes.SELECT,
//             replacements: sqlFilterValue
//         })
//         .then(
//             (resCount) => {
//                 const data = {
//                     totalRowCount: resCount[0].total_row_count,
//                     page: page,
//                     limit: limit,
//                     data: res
//                 }
//                 callback(null, data)
//             },(error) => {
//                 throw error
//             }
//         )
//         .catch((error) => {
//             throw error
//         })
//     })
//     .catch((error) => {
//         callback(error, null)
//     })
// }

export const getKkt = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
    "SELECT " +
    "simar.data_rs_new.propinsi AS kode, " +
    "simar.data_rs_new.RUMAH_SAKIT AS namaRS, " +
    "simar.kkt.bulan AS bulan, " +
    "simar.kkt.tahun AS tahun, " +
    "simar.kkt.capaian AS kepatuhanKebersihanTangan ";

  const sqlFrom =
    "FROM simar.data_rs_new " +
    "LEFT JOIN simar.kkt ON simar.kkt.kode_rs = simar.data_rs_new.propinsi ";

  const sqlOrder = " ORDER BY simar.data_rs_new.propinsi ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("simar.data_rs_new.propinsi = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("simar.kkt.bulan = ? ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("simar.kkt.tahun = ?  ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE simar.data_rs_new.Propinsi IS NOT NULL ";
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

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSimar
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(simar.data_rs_new.Propinsi) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSimar
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

export const getKpapd = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
    "SELECT " +
    "simar.data_rs_new.propinsi AS kode, " +
    "simar.data_rs_new.RUMAH_SAKIT AS namaRS, " +
    "simar.kpapd.bulan AS bulan, " +
    "simar.kpapd.tahun AS tahun, " +
    "simar.kpapd.capaian AS kepatuhanPenggunaanAPD ";

  const sqlFrom =
    "FROM simar.data_rs_new " +
    "LEFT JOIN simar.kkt ON simar.kkt.kode_rs = simar.data_rs_new.propinsi " +
    "LEFT JOIN simar.kpapd ON simar.kpapd.kode_rs = simar.data_rs_new.propinsi ";

  const sqlOrder = " ORDER BY simar.data_rs_new.propinsi ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("simar.data_rs_new.propinsi = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("simar.kpapd.bulan = ? ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("simar.kpapd.tahun = ? ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE simar.data_rs_new.Propinsi IS NOT NULL ";
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

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSimar
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(simar.data_rs_new.Propinsi) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSimar
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

export const getKwv = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
    "SELECT " +
    "simar.data_rs_new.propinsi AS kode, " +
    "simar.data_rs_new.RUMAH_SAKIT AS namaRS, " +
    "simar.kwv.bulan AS bulan, " +
    "simar.kwv.tahun AS tahun, " +
    "simar.kwv.capaian AS kepatuhanWaktuVisiteDokter ";

  const sqlFrom =
    "FROM simar.data_rs_new " +
    "LEFT JOIN simar.kwv ON simar.kwv.kode_rs = simar.data_rs_new.propinsi ";
  const sqlOrder = " ORDER BY simar.data_rs_new.propinsi ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("simar.data_rs_new.propinsi = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("simar.kwv.bulan = ? ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("simar.kwv.tahun = ? ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE simar.data_rs_new.Propinsi IS NOT NULL ";
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

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSimar
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(simar.data_rs_new.Propinsi) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSimar
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

export const getKpfn = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
    "SELECT " +
    "simar.data_rs_new.propinsi AS kode, " +
    "simar.data_rs_new.RUMAH_SAKIT AS namaRS, " +
    "simar.kpfn_kpf.bulan AS bulan, " +
    "simar.kpfn_kpf.tahun AS tahun, " +
    "simar.kpfn_kpf.capaian AS kepatuhanPenggunaanFormulariumNasional ";

  const sqlFrom =
    "FROM simar.data_rs_new " +
    "LEFT JOIN simar.kpfn_kpf ON simar.kpfn_kpf.kode_rs = simar.data_rs_new.propinsi ";
  const sqlOrder = " ORDER BY simar.data_rs_new.propinsi ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("simar.data_rs_new.propinsi = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("simar.kpfn_kpf.bulan = ? ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("simar.kpfn_kpf.tahun = ? ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE simar.data_rs_new.Propinsi IS NOT NULL ";
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

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSimar
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(simar.data_rs_new.Propinsi) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSimar
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

export const getKwt = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
    "SELECT " +
    "simar.data_rs_new.propinsi AS kode, " +
    "simar.data_rs_new.RUMAH_SAKIT AS namaRS, " +
    "simar.kwt.bulan AS bulan, " +
    "simar.kwt.tahun AS tahun, " +
    "simar.kwt.capaian AS kecepatanWaktuTanggapKomplain ";

  const sqlFrom =
    "FROM simar.data_rs_new " +
    "LEFT JOIN simar.kwt ON simar.kwt.kode_rs = simar.data_rs_new.propinsi ";

  const sqlOrder = " ORDER BY simar.data_rs_new.propinsi ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("simar.data_rs_new.propinsi = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("simar.data_rs_new.RUMAH_SAKIT like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("simar.kwt.bulan = ? ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("simar.kwt.tahun = ? ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE simar.data_rs_new.Propinsi IS NOT NULL ";
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

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSimar
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(simar.data_rs_new.Propinsi) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSimar
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
