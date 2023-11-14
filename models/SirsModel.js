import { QueryTypes } from "sequelize";
import { databaseSirs } from "../config/Database.js";

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

//     databaseSirs.query(sql, {
//         type: QueryTypes.SELECT,
//         replacements: sqlFilterValue
//     }).then((res) => {
//         const sqlSelectCount = 'SELECT count(simar.data_rs_new.Propinsi) as total_row_count '
//         const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter)
//         databaseSirs.query(sqlCount, {
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

export const getTahunan = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
  'SELECT '+
  'sirsdpjp.users.rs_id AS kode, '+
  'sirsdpjp.users.nama AS namaRS, '+
  'sirsdpjp.rl_satu_titik_dua_detail.tahun AS tahun, '+
  'ri.jumlah AS jumlahPasienRI, '+
  'lab.jumlah AS jumlahLayananLab, '+
  'ops.jumlah AS jumlahLayananOperasi, '+
  'rad.jumlah AS jumlahLayananRadiologi, '+
  'jkn.jumlah AS jumlahPasienJKN, '+
  'far.jumlah AS jumlahLayananFarmasi, '+
  'sirsdpjp.rl_satu_titik_dua_detail.bor AS bor, '+
  'sirsdpjp.rl_satu_titik_dua_detail.toi AS toi, '+
  'sirsdpjp.rl_satu_titik_dua_detail.los  AS los, '+
  'sirsdpjp.rl_satu_titik_dua_detail.bto AS bto '

  const sqlFrom =
  'FROM sirsdpjp.users '+
  'LEFT JOIN sirsdpjp.rl_satu_titik_dua_detail ON sirsdpjp.rl_satu_titik_dua_detail.rs_id = sirsdpjp.users.rs_id '+
  'LEFT JOIN ( '+
  '	SELECT  '+
  '	sirsdpjp.rl_tiga_titik_satu_detail.rs_id, '+
  '	sirsdpjp.rl_tiga_titik_satu_detail.tahun, '+
  '	SUM(sirsdpjp.rl_tiga_titik_satu_detail.jumlah_pasien_awal_tahun + '+
  '	sirsdpjp.rl_tiga_titik_satu_detail.jumlah_pasien_akhir_tahun) AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_satu_detail  '+
  '	GROUP BY sirsdpjp.rl_tiga_titik_satu_detail.rs_id '+
  ')ri ON ri.rs_id  = sirsdpjp.users.rs_id AND ri.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '+
  'LEFT JOIN ( '+
  '	SELECT sirsdpjp.rl_tiga_titik_delapan_detail.rs_id AS rs_id,  '+
  '	sirsdpjp.rl_tiga_titik_delapan_detail.tahun, '+
  '	SUM(sirsdpjp.rl_tiga_titik_delapan_detail.jumlah) AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_delapan_detail '+
  '	GROUP BY sirsdpjp.rl_tiga_titik_delapan_detail.rs_id '+
  ')lab ON lab.rs_id  = sirsdpjp.users.rs_id AND lab.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '+
  'LEFT JOIN ( '+
  '	SELECT sirsdpjp.rl_tiga_titik_enam_detail.rs_id AS rs_id,  '+
  '	sirsdpjp.rl_tiga_titik_enam_detail.tahun, '+
  '	SUM(sirsdpjp.rl_tiga_titik_enam_detail.total) AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_enam_detail '+
  '	GROUP BY sirsdpjp.rl_tiga_titik_enam_detail.rs_id '+
  ')ops ON ops.rs_id  = sirsdpjp.users.rs_id AND ops.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '+
  'LEFT JOIN ( '+
  '	SELECT sirsdpjp.rl_tiga_titik_tujuh_detail.rs_id AS rs_id,  '+
  '	sirsdpjp.rl_tiga_titik_tujuh_detail.tahun, '+
  '	SUM(sirsdpjp.rl_tiga_titik_tujuh_detail.jumlah) AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_tujuh_detail '+
  '	GROUP BY sirsdpjp.rl_tiga_titik_tujuh_detail.rs_id '+
  ')rad ON rad.rs_id  = sirsdpjp.users.rs_id AND rad.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '+
  'LEFT JOIN (  '+
  '	SELECT  '+
  '	sirsdpjp.rl_tiga_titik_lima_belas_detail.rs_id AS rs_id, '+
  '	sirsdpjp.rl_tiga_titik_lima_belas_detail.tahun, '+
  '	sirsdpjp.rl_tiga_titik_lima_belas_detail.pasien_rawat_inap_jpk +  '+
  '	sirsdpjp.rl_tiga_titik_lima_belas_detail.pasien_rawat_inap_jld + '+
  '	sirsdpjp.rl_tiga_titik_lima_belas_detail.jumlah_pasien_rawat_jalan AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_lima_belas_detail  '+
  '	WHERE cara_pembayaran_id = 3 '+
  ')jkn ON jkn.rs_id  = sirsdpjp.users.rs_id AND jkn.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '+
  'LEFT JOIN ( '+
  '	SELECT  '+
  '	sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.rs_id AS rs_id, '+
  '	sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.tahun, '+
  '	SUM( '+
  '	sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.rawat_jalan + '+
  '	sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.igd + '+
  '	sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.rawat_inap)  AS jumlah '+
  '	FROM sirsdpjp.rl_tiga_titik_tiga_belas_b_detail  '+
  '	GROUP BY sirsdpjp.rl_tiga_titik_tiga_belas_b_detail.rs_id '+
  ')far ON far.rs_id  = sirsdpjp.users.rs_id AND far.tahun = sirsdpjp.rl_satu_titik_dua_detail.tahun '
  

  
  const sqlOrder = " ORDER BY sirsdpjp.users.rs_id ";

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  sirsdpjp.users.rs_id NOT IN (999999999, 9999999) AND sirsdpjp.users.jenis_user_id = 4 AND ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  // const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("sirsdpjp.users.rs_id = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("sirsdpjp.users.nama like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (tahun != null) {
    filter.push("sirsdpjp.rl_satu_titik_dua_detail.tahun = ?  ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE sirsdpjp.rl_satu_titik_dua_detail.rs_id IS NOT NULL ";
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

  databaseSirs
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(sirsdpjp.users.rs_id) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSirs
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


export const getBulanan = (req, callback) => {
  const page = parseInt(req.query.page) || 1;
  const limit =
    parseInt(req.query.limit) > 100 ? 100 : parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = limit;

  const sqlSelect =
  'SELECT  ' +
  'sirsdpjp.users.rs_id AS kode, ' +
  'sirsdpjp.users.nama AS namaRs , ' +
  'MONTH(sirsdpjp.rl_lima_titik_dua_detail.tahun) AS bulan, ' +
  'YEAR(sirsdpjp.rl_lima_titik_dua_detail.tahun) AS tahun, ' +
  'SUM(sirsdpjp.rl_lima_titik_dua_detail.jumlah) AS jumlahPasienRJ '

  const sqlFrom =
  'FROM sirsdpjp.users ' +
  'LEFT JOIN sirsdpjp.rl_lima_titik_dua_detail ON sirsdpjp.users.rs_id = sirsdpjp.rl_lima_titik_dua_detail.rs_id ' 
  

  const sqlOrder = " ORDER BY sirsdpjp.users.rs_id, tahun, bulan asc ";

  const sqlGroup = "GROUP BY sirsdpjp.rl_lima_titik_dua_detail.rs_id, MONTH(sirsdpjp.rl_lima_titik_dua_detail.tahun), YEAR(sirsdpjp.rl_lima_titik_dua_detail.tahun) "

  const sqlLimit = "LIMIT ? ";

  const sqlOffSet = "OFFSET ?";

  const sqlWhere = "WHERE  sirsdpjp.users.rs_id NOT IN (999999999, 9999999) AND sirsdpjp.users.jenis_user_id = 4 AND ";

  const filter = [];
  const sqlFilterValue = [];

  const kode = req.query.kode || null;
  const namaRS = req.query.namaRS || null;
  const bulan = req.query.bulan || null;
  const tahun = req.query.tahun || null;

  if (kode != null) {
    filter.push("sirsdpjp.users.rs_id = ? ");
    sqlFilterValue.push(kode);
  }

  if (namaRS != null) {
    filter.push("sirsdpjp.users.nama like ? ");
    sqlFilterValue.push("%".concat(namaRS).concat("%"));
  }

  if (bulan != null) {
    filter.push("MONTH(sirsdpjp.rl_lima_titik_dua_detail.tahun) = ?  ");
    sqlFilterValue.push(bulan);
  }

  if (tahun != null) {
    filter.push("YEAR(sirsdpjp.rl_lima_titik_dua_detail.tahun) = ?  ");
    sqlFilterValue.push(tahun);
  }

  sqlFilterValue.push(endIndex);
  sqlFilterValue.push(startIndex);

  let sqlFilter = "";
  if (filter.length == 0) {
    sqlFilter = "WHERE sirsdpjp.rl_satu_titik_dua_detail.rs_id IS NOT NULL ";
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
    .concat(sqlFilter).concat(sqlGroup)
    .concat(sqlOrder)
    .concat(sqlLimit)
    .concat(sqlOffSet);

  // console.log("haloo ")
  // console.log(sqlFilterValue)

  databaseSirs
    .query(sql, {
      type: QueryTypes.SELECT,
      replacements: sqlFilterValue,
    })
    .then((res) => {
      const sqlSelectCount =
        "SELECT count(sirsdpjp.users.rs_id) as total_row_count ";
      const sqlCount = sqlSelectCount.concat(sqlFrom).concat(sqlFilter);
      databaseSirs
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