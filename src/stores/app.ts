/* eslint-disable semi */
// Utilities
import { Portfolios } from '@/types/portfolios';
import { Portfolio } from '@/types/portfolio';
import { defineStore } from 'pinia';

const api = 'https://eba5-83-142-150-182.ngrok-free.app';

export const useAppStore = defineStore('app', {
  state: () => ({
    portfolios: [] as Portfolios[],
    selectedPortfolio: '' as Portfolios['id'],
    portfolio: {} as Portfolio,
  }),
  actions: {
    //
    getPortfoliosFromApi () {
      const apiResult = fetch(api + '/portfolios', {
        method: 'GET',
        headers: {
          // add ngrok-skip-browser-warning to the headers
          'ngrok-skip-browser-warning': 'true',
        },
      });

      apiResult.then(response => {
        response.json().then(data => {
          this.portfolios = data;
        });
      });
    },
    getPortfolioFromApi (id: string) {
      const apiResult = fetch(api + '/portfolios/' + id, {
        method: 'GET',
        headers: {
          // add ngrok-skip-browser-warning to the headers
          'ngrok-skip-browser-warning': 'true',
        },
      });

      apiResult.then(response => {
        response.json().then(data => {
          this.portfolio = data;
        });
      });
    },
  },

  getters: {
    getAll: (state: { portfolios: any }) => {
      return state.portfolios;
    },
  },
});
