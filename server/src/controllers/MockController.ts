import { Request, Response } from 'express';

const mock = {
  kpis: [10, 20, 30, 40],
  charts: {
    barchart: {
      data: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: 'rgba(255,0,0,0.5)',
          hoverBackgroundColor: 'rgba(255,0,0,1)',
        },
        {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: 'rgba(148,159,177,0.5)',
          borderColor: 'rgba(148,159,177,1)',
          hoverBackgroundColor: 'rgba(148,159,177,1)',
        },
      ],
      labels: [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
      ],
    },

    linechart: {
      data: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        {
          data: [180, 480, 770, 90, 1000, 270, 400],
          label: 'Series C',
          yAxisID: 'y-axis-1',
        },
      ],
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ],
    },
  },
};

class MockController {
  async getMock(req: Request, res: Response) {
    try {
      return res.status(200).json(mock);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new MockController();