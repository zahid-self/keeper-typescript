
module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define('project', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    startDate: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
    endDate: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    }
  });
  return Project;
}