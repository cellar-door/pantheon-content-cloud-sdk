import ora from 'ora';
import AddOnApiHelper from '../../lib/addonApiHelper';
import chalk from 'chalk';
import { printTable } from '../../lib/cliDisplay';
import { errorHandler } from '../exceptions';
import dayjs from 'dayjs';

export const createSite = errorHandler<{ name: string; url: string }>(
  async ({ name, url }: { name: string; url: string }) => {
    const spinner = ora('Creating site...').start();
    try {
      await AddOnApiHelper.createSite(name, url);
      spinner.succeed(`Successfully created the site with given details.`);
    } catch (e) {
      spinner.fail();
      throw e;
    }
  },
);

export const updateSite = errorHandler<{
  id: string;
  name?: string;
  url?: string;
}>(async ({ id, name, url }: { id: string; name?: string; url?: string }) => {
  const spinner = ora('Updating site...').start();
  try {
    await AddOnApiHelper.updateSite(id, name, url);
    spinner.succeed(`Successfully updated the site for given ID.`);
  } catch (e) {
    spinner.fail();
    throw e;
  }
});

export const listSites = errorHandler<void>(async () => {
  const spinner = ora('Fetching list of existing sites...').start();
  try {
    const sites = await AddOnApiHelper.listSites();

    spinner.succeed('Successfully fetched list of sites.');
    if (sites.length === 0) {
      console.log(chalk.yellow('No sites found.'));
      return;
    }

    printTable(
      sites.map((item) => {
        return {
          Id: item.id,
          Name: item.name,
          Url: item.url,
          'Created At': item.created
            ? dayjs(item.created).format('DD MMM YYYY, hh:mm A')
            : 'NA',
        };
      }),
    );
  } catch (e) {
    spinner.fail();
    throw e;
  }
});
