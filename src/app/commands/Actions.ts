interface IActions {
    displaySportsNews(): void;
    displayEconomicsNews(): void;
    displayEntertainmentNews(): void;
    displayPoliticsNews(): void;
}

class Actions implements IActions {
    displaySportsNews(): void {
        alert('Across NFL Fantasy, we\'re working hard as ever to help fantasy owners everywhere make that final push. It\'s #SaveYourSeason time, and whether you need to tie a few wins together for a shot at the playoffs or are just trying to set up your squad for the best chance to win a title, be sure to tweet @NFLFantasy with the #SaveYourSeason hashtag. Maybe you\'ll see your question answered on "NFL Fantasy LIVE," "Fantasy and Friends," or on one of our social platforms.');
    }

    displayEconomicsNews(): void {
        alert('Voters in four U.S. cities approved or appeared likely to approve special taxes on sugary drinks, energizing advocates who say the victories are indicative of growing momentum for measures that discourage people from guzzling calories.');
    }

    displayEntertainmentNews(): void {
        alert('Like everything else in “Loving,” the movie’s climax doesn’t soar so much as whisper. The movie is based on the true story of a Virginia interracial couple who were arrested, then exiled from their home state in 1959 after they married in the District. In their quest to return home again, they unwittingly became civil rights icons. It’s a straightforward tale about modest people who wanted nothing more than a quiet life in the country near family and friends.');
    }

    displayPoliticsNews(): void {
        alert('Not when Donald Trump proposed banning Muslims from entering the United States, a plan his own running mate called "offensive and unconstitutional." Not when Trump suggested monitoring mosques and torturing terrorism suspects. Not even when Islamophobic incidents spiked to their highest levels since the 9/11 attacks.');
    }
}
