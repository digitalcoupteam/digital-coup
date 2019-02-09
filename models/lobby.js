module.exports = function (sequelize, DataTypes) {
    const Lobby = sequelize.define("Lobby", {
      lobbyName: {
        type: DataTypes.STRING,
        allowNull: false,
  
      },
      user1: {
        type: DataTypes.STRING,
      },
      user2: {
        type: DataTypes.STRING,
      },
      user3: {
        type: DataTypes.STRING,
      },
      user4: {
        type: DataTypes.STRING,
      },
    });
    return Lobby;
  };
  