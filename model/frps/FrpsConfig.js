const { Model, DataTypes } = require("sequelize");
const sequelize = require("../conn").sequelize;

class FrpsConfig extends Model {
  valueOf(k) {
    if (this[k]) {
      return `${k} = ${this[k]}`;
    }
    return null;
  }
  toString() {
    const fields = [
      "bind_addr",
      "bind_port",
      "bind_udp_port",
      "kcp_bind_port",
      "proxy_bind_addr",
      "log_file",
      "log_level",
      "log_max_days",
      "disable_log_color",
      "detailed_errors_to_client",
      "heart_beat_timeout",
      "user_conn_timeout",
      "udp_packet_size",
      "tls_cert_file",
      "tls_key_file",
      "tls_trusted_ca_file",
      "authentication_method",
      "authenticate_heartbeats",
      "authenticate_new_work_conns",
      "token",
      "oidc_issuer",
      "oidc_audience",
      "oidc_skip_expiry_check",
      "oidc_skip_issuer_check",
      "allow_ports",
      "max_pool_count",
      "max_ports_per_client",
      "tls_only",
      "dashboard_addr",
      "dashboard_port",
      "dashboard_user",
      "dashboard_pwd",
      "enable_prometheus",
      "asserts_dir",
      "vhost_http_port",
      "vhost_https_port",
      "vhost_http_timeout",
      "subdomain_host",
      "custom_404_page",
      "tcpmux_httpconnect_port",
    ];
    var result = [];
    for(var i=0; i<fields.length; i++){
        var k = fields[i];
        if(this[k]) result.push(`${k} = ${this[k]}`);
    }
    return result.join('\n');
  }
}

FrpsConfig.init(
  {
    bind_addr: DataTypes.STRING,
    bind_port: DataTypes.INTEGER,
    bind_udp_port: DataTypes.INTEGER,
    kcp_bind_port: DataTypes.INTEGER,
    proxy_bind_addr: DataTypes.STRING,
    log_file: DataTypes.STRING,
    log_level: DataTypes.STRING,
    log_max_days: DataTypes.INTEGER,
    disable_log_color: DataTypes.STRING,
    detailed_errors_to_client: DataTypes.STRING,
    heart_beat_timeout: DataTypes.INTEGER,
    user_conn_timeout: DataTypes.INTEGER,
    udp_packet_size: DataTypes.INTEGER,
    tls_cert_file: DataTypes.STRING,
    tls_key_file: DataTypes.STRING,
    tls_trusted_ca_file: DataTypes.STRING,
    authentication_method: DataTypes.STRING,
    authenticate_heartbeats: DataTypes.STRING,
    authenticate_new_work_conns: DataTypes.STRING,
    token: DataTypes.STRING,
    oidc_issuer: DataTypes.STRING,
    oidc_audience: DataTypes.STRING,
    oidc_skip_expiry_check: DataTypes.STRING,
    oidc_skip_issuer_check: DataTypes.STRING,
    allow_ports: DataTypes.STRING,
    max_pool_count: DataTypes.INTEGER,
    max_ports_per_client: DataTypes.INTEGER,
    tls_only: DataTypes.STRING,
    dashboard_addr: DataTypes.STRING,
    dashboard_port: DataTypes.INTEGER,
    dashboard_user: DataTypes.STRING,
    dashboard_pwd: DataTypes.STRING,
    enable_prometheus: DataTypes.STRING,
    asserts_dir: DataTypes.STRING,
    vhost_http_port: DataTypes.INTEGER,
    vhost_https_port: DataTypes.INTEGER,
    vhost_http_timeout: DataTypes.INTEGER,
    subdomain_host: DataTypes.STRING,
    custom_404_page: DataTypes.STRING,
    tcpmux_httpconnect_port: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "frpsConf",
  }
);

sequelize.sync();
// (async() => {
//     await sequelize.sync();
//     console.log('FrpsConfig Done!')
// })();

module.exports = FrpsConfig;
